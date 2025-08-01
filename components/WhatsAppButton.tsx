'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201024886944"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn flex items-center space-x-2 rtl:space-x-reverse hover:scale-105 transition-transform"
    >
      <i className="ri-chat-3-line text-lg"></i>
      <span className="font-medium whitespace-nowrap">تواصل مع المعلن</span>
    </a>
  );
}