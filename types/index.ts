interface NameOfPage {
  name: string;
}

interface Data {
  label: string;
  data: number[];
  bgColor?: string[];
  borderColor?: string[];
  borderWidth?: number;
  outerWidth?: string;
}
interface Props {
  labels: string[];
  dataset: Data;
}
