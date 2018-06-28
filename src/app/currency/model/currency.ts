export interface Currency {
    id?: string;
    attributes?: {
        code?: string,
        name?: string,
        type?: string,
        code_iso_numeric3?: string,
        code_iso_alpha3?: string,
        symbol?: string,
        native_symbol?: string,
        category?: string
        };
  }