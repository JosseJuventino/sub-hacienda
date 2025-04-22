export type DocumentType =
  | "dui"
  | "nit"
  | "residency"
  | "birth_certificate"
  | "passport";
  
export type DepartmentKey =
  | "sonsonate"
  | "san_salvador"
  | "la_libertad"
  | "cabañas"
  | "san_vicente"
  | "la_union"
  | "morazan"
  | "chalatenango"
  | "cuscatlan";


  export interface Departamento {
    departamentoID: number;
    name: string;
    codeMH: string;
  }
  
  export interface Municipio {
    municipioID: number;
    name: string;
    codeMH: string;
  }
  
  export interface Activity {
    codeMH: string;
    name: string;
  }
  
  export interface SelectOption {
    label: string;
    value: string;
    key: string | number;
  }

  export interface FormValues {
    customerName: string;
    documentType: { label: string; value: string } | null;
    customerDoc: string;
    email: string;
    tel?: string;
    nrc?: string;
    name_comercial?: string;
    departamento?: { label: string; value: string, key: string } | null;
    municipio?: { label: string; value: string, key: string } | null;
    address?: string;
    activity?: { label: string; value: number, key: string } | null;
  }
  