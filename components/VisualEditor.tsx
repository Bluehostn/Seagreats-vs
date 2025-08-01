
'use client';

import { useState, useEffect } from 'react';

export default function VisualEditor() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    // فحص إذا كان المستخدم مدير
    const isAdmin = localStorage.getItem('admin_logged_in');
    if (isAdmin) {
      setShowToolbar(true);
    }
  }, []);

  const enableEditMode = () => {
    setIsEditMode(true);
    
    // إضافة خصائص التعديل للعناصر
    const editableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button');
    editableElements.forEach((element) => {
      element.addEventListener('click', handleElementClick);
      (element as HTMLElement).style.cursor = 'pointer';
      (element as HTMLElement).style.outline = '2px dashed transparent';
      
      element.addEventListener('mouseenter', () => {
        (element as HTMLElement).style.outline = '2px dashed #3B82F6';
      });
      
      element.addEventListener('mouseleave', () => {
        if (element !== selectedElement) {
          (element as HTMLElement).style.outline = '2px dashed transparent';
        }
      });
    });
  };

  const disableEditMode = () => {
    setIsEditMode(false);
    setSelectedElement(null);
    
    // إزالة خصائص التعديل
    const editableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button');
    editableElements.forEach((element) => {
      element.removeEventListener('click', handleElementClick);
      (element as HTMLElement).style.cursor = 'default';
      (element as HTMLElement).style.outline = 'none';
    });
  };

  const handleElementClick = (e: Event) => {
    if (!isEditMode) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const element = e.target as HTMLElement;
    setSelectedElement(element);
    element.style.outline = '2px solid #3B82F6';
    
    // جعل العنصر قابل للتعديل
    element.contentEditable = 'true';
    element.focus();
    
    // حفظ التغييرات عند فقدان التركيز
    element.onblur = () => {
      element.contentEditable = 'false';
      element.style.outline = '2px dashed #3B82F6';
      // هنا يمكن حفظ التغييرات في قاعدة البيانات
      console.log('تم تعديل النص:', element.textContent);
    };
  };

  const handleDragStart = (e: React.DragEvent) => {
    // منطق السحب والإفلات
  };

  const handleDrop = (e: React.DragEvent) => {
    // منطق الإفلات
  };

  if (!showToolbar) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <i className="ri-edit-line text-blue-600"></i>
          <span className="text-sm font-medium text-gray-700">محرر مرئي</span>
        </div>
        
        <button
          onClick={isEditMode ? disableEditMode : enableEditMode}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isEditMode
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isEditMode ? 'إنهاء التعديل' : 'بدء التعديل'}
        </button>
      </div>
      
      {isEditMode && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-1">
            <div>• انقر على أي نص لتعديله</div>
            <div>• اسحب العناصر لتغيير موضعها</div>
            <div>• التغييرات تُحفظ تلقائياً</div>
          </div>
        </div>
      )}
      
      {selectedElement && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-blue-600 font-medium">
            عنصر محدد: {selectedElement.tagName.toLowerCase()}
          </div>
        </div>
      )}
    </div>
  );
}
