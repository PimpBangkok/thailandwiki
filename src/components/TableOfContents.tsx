interface Section {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
        In This Guide
      </h3>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left text-gray-700 hover:text-[#2B5D8C] hover:bg-pink-50 px-3 py-2 rounded transition-colors text-sm font-medium"
          >
            - {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
