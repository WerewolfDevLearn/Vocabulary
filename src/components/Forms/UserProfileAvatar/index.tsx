import { useRef, useState } from "react";
import { useAppDispatch } from "reduxfiles/store";

import { avatarUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";
import { useAvatar, useProfileIsLoadingAvatar } from "reduxfiles/selectors";

import Loader from "components/Loader/Loader";

import {
  UserProfileAvatarContainer,
  FileInput,
  FileInputButton,
  AvatarImage,
} from "./UserProfileAvatar.styled";

export default function UserProfileAvatar() {
  const avatarUrl = useAvatar();
  const isloading = useProfileIsLoadingAvatar();

  const dispatch = useAppDispatch();
  const filePicker = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("/svg/PlceHolderIcon.svg");

  const handlePick = () => {
    filePicker.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    setImage(URL.createObjectURL(file));
    const data = new FormData();
    data.append("file", file);
    dispatch(avatarUpdate(data));
  };

  return (
    <>
      <UserProfileAvatarContainer>
        <FileInputButton onClick={handlePick}>
          {isloading ? (
            <Loader />
          ) : (
            <AvatarImage src={avatarUrl ? avatarUrl : image} alt="avatar" />
          )}
        </FileInputButton>
        <FileInput ref={filePicker} onChange={handleChange} />
      </UserProfileAvatarContainer>
    </>
  );
}
