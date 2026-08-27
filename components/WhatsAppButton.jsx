// Sitewide floating WhatsApp button.
// Digits only, country code, no + or spaces — e.g. Pakistan "923001234567".
const WHATSAPP_NUMBER = "923107085787";

export default function WhatsAppButton() {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.startsWith("PASTE_")) return null;

  const message = encodeURIComponent(
    "Hi — I'd like to ask about manufacturing with 2 Oceans Global."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
        <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.44 1.73 6.37L3.2 28.8l6.6-1.7a12.74 12.74 0 0 0 6.2 1.58h.001c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.68-12.8-12.68zm0 23.16h-.001a10.4 10.4 0 0 1-5.31-1.46l-.38-.22-3.92 1.02 1.05-3.82-.25-.39a10.35 10.35 0 0 1-1.59-5.53c0-5.73 4.67-10.4 10.41-10.4 2.78 0 5.39 1.08 7.36 3.05a10.33 10.33 0 0 1 3.04 7.36c0 5.74-4.67 10.39-10.4 10.39zm5.7-7.8c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37z" />
      </svg>
    </a>
  );
}
