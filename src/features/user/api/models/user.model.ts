export interface Avatar {
  photoLob: string;
}

export interface UserBrief {
  id: number;
  username: string;
  name: string;
  sex: string;
  age: number;
  city: string;
  photos: Avatar[];
}

export interface User {
  id: number;
  username: string;
  name: string;
  sex: string;
  targetSex: string;
  age: number;
  minAge: number;
  maxAge: number;
  city: string;
  description: string;
  purposeOfDating: string;
  communicationForm: string;
  isActive: boolean;
  lastKnownChatId: number;
  language: {
    id: number;
    code: string;
    name: string;
    emoji: string;
    fullName: string;
  };
  photos: [
    {
      fileId: string;
      fileUniqueId: string;
      width: string;
      height: string;
      fileSize: string;
      filePath: string;
      photoLob: string;
    },
  ];
}
