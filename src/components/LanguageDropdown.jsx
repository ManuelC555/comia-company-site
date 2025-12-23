import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="lang-dropdown">
      <button onClick={() => setOpen(!open)}>
        {i18n.language.toUpperCase()}
      </button>

      {open && (
        <ul className="lang-menu">
          <li onClick={() => { i18n.changeLanguage("fr"); setOpen(false); }}>FR</li>
          <li onClick={() => { i18n.changeLanguage("en"); setOpen(false); }}>EN</li>
          <li onClick={() => { i18n.changeLanguage("es"); setOpen(false); }}>ES</li>
        </ul>
      )}
    </div>
  );
}
