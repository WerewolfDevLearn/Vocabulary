import { ErrorWrapper, ErrorElement } from "./FromError.styled";

interface IFromError {
  string: string | undefined;
}

export default function FromError({ string }: IFromError) {
  return <ErrorWrapper>{string && <ErrorElement>{string}</ErrorElement>}</ErrorWrapper>;
}
