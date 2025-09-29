interface Print {
  print(document: string): void;
}

interface Scan {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

// Een simpele printer die alleen kan printen
class SimplePrinter implements Print {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }
}

// Een multifunctionele printer die alles kan
class MultiFunctionPrinter implements Print, Scan, Fax {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }
  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }
  fax(document: string): void {
    console.log(`Faxing: ${document}`);
  }
}

// Een scanner die alleen kan scannen
class SimpleScanner implements Scan {
  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }
}