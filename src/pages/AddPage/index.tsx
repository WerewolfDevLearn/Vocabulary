import AddFrom from "components/Forms/AddFrom";
import Recent from "components/Recent";

import { AddPageStyles, PageHeading, Wrapper } from "./AddPage.styled";

export default function AddPage() {
  return (
    <AddPageStyles>
      <PageHeading>Add</PageHeading>
      <Wrapper>
        <AddFrom />
        <Recent />
      </Wrapper>
    </AddPageStyles>
  );
}
