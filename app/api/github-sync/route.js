import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// حماية هذه الواجهة من الاستخدام غير المصرح به
const API_SECRET = process.env.GITHUB_SYNC_SECRET || 'seagreats-sync-secret';

/**
 * واجهة API لمزامنة المشروع مع GitHub
 */
export async function POST(request) {
  try {
    const { repo, branch = 'main', secret } = await request.json();

    // التحقق من سر API
    if (secret !== API_SECRET) {
      return NextResponse.json({ success: false, message: 'غير مصرح به' }, { status: 401 });
    }

    if (!repo) {
      return NextResponse.json({ success: false, message: 'المستودع مطلوب' }, { status: 400 });
    }

    // تنفيذ أوامر Git للتزامن
    // ملاحظة: هذا يفترض أن المشروع مرتبط بالفعل بمستودع GitHub
    const syncCommands = [
      // تحديث التغييرات المحلية
      'git add .',
      'git commit -m "تزامن تلقائي عبر واجهة API"',
      // سحب أي تحديثات من المستودع البعيد
      `git pull origin ${branch} --rebase`,
      // دفع التغييرات المحلية
      `git push origin ${branch}`
    ];

    let results = [];

    for (const cmd of syncCommands) {
      try {
        const { stdout, stderr } = await execAsync(cmd);
        results.push({
          command: cmd,
          stdout: stdout.trim(),
          stderr: stderr.trim(),
          success: true
        });
      } catch (cmdError) {
        // تسجيل الخطأ واستمرار في محاولة الأوامر الأخرى
        console.error(`خطأ في تنفيذ الأمر ${cmd}:`, cmdError);
        results.push({
          command: cmd,
          error: cmdError.message,
          success: false
        });
      }
    }

    // التحقق مما إذا كانت جميع الأوامر نجحت
    const allSuccessful = results.every(result => result.success);

    return NextResponse.json({ 
      success: allSuccessful,
      results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('خطأ في مزامنة GitHub:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'حدث خطأ أثناء محاولة التزامن', 
      error: error.message 
    }, { status: 500 });
  }
}
