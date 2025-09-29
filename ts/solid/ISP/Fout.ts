interface Printer {
  print(): void;
  scan(): void;
  fax(): void;
}

class OldPrinter implements Printer {
  print(): void {
    console.log("Printing...");
  }
  scan(): void {
    // Fout: deze printer kan niet scannen
    throw new Error("Scan not supported");
  }
  fax(): void {
    // Fout: deze printer kan niet faxen
    throw new Error("Fax not supported");
  }
}