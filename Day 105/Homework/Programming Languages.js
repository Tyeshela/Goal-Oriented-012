class Languages {
    constructor() {
      this.languagesDatabase = [];
    }
  
    addLanguage(name, creator, year, description) {
      const language = {
        name,
        creator,
        year,
        description,
      };
      this.languagesDatabase.push(language);
    }
  
    getLanguageByName(name) {
      return this.languagesDatabase.find(language => language.name === name);
    }
  
    listLanguages() {
      const sortedLanguages = [...this.languagesDatabase].sort((a, b) => a.name.localeCompare(b.name));
      return sortedLanguages.map(language => language.name);
    }
  }
  
  // Create an instance of the Languages class
  const languageDatabase = new Languages();
  
  // Add programming languages to the database
  languageDatabase.addLanguage("JavaScript", "Brendan Eich", 1995, "A versatile scripting language.");
  languageDatabase.addLanguage("Python", "Guido van Rossum", 1989, "Known for its simplicity and readability.");
  languageDatabase.addLanguage("Java", "James Gosling", 1995, "A popular, platform-independent language.");
  languageDatabase.addLanguage("Ruby", "Yukihiro Matsumoto", 1995, "Designed for developer happiness.");
  languageDatabase.addLanguage("C++", "Bjarne Stroustrup", 1983, "An extension of C with object-oriented features.");
  
  // Demonstration of Language class methods
  console.log(languageDatabase.getLanguageByName("Python"));
  console.log(languageDatabase.listLanguages());
  