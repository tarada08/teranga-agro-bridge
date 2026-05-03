import { dict, type Lang } from "@/lib/i18n";

export function WhatsAppButton({ lang }: { lang: Lang }) {
  const phone = "221783073636";
  const text = encodeURIComponent(dict[lang].whatsappMsg);
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.094c-.95-.564-1.768-1.123-2.475-2.052-.094-.124-.345-.515-.345-.682 0-.354 1.043-.731 1.043-1.165 0-.082-.027-.166-.061-.247-.196-.464-.94-2.143-1.27-2.467a.74.74 0 0 0-.481-.142c-.08 0-.222.018-.358.018-.292 0-.394.066-.531.205-.296.291-.804.851-.804 2.013 0 .992.348 1.829.745 2.526.81 1.421 2.064 2.61 3.51 3.448.522.302 1.072.563 1.65.74.299.092.715.18 1.03.18.422 0 1.243-.092 1.65-.291.382-.198.646-.523.78-.879.135-.357.105-.715.075-.808-.024-.063-.103-.094-.225-.156-.122-.061-.745-.367-1.115-.5z M16.001 4C9.373 4 4 9.373 4 16c0 2.165.589 4.243 1.706 6.057L4 28l6.146-1.6A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.628 4 16.001 4z" />
      </svg>
    </a>
  );
}
