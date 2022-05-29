/* eslint-disable camelcase */
import { ICharacters } from '../types/ICharacters';

export const getFormattedCharInfo = (char: ICharacters[]) => {
  if (char.length === 0) {
    return [];
  }

  const { name, nickname, img, status, portrayed, occupation, appearance, better_call_saul_appearance } = char[0];

  let { birthday } = char[0];

  if (/-/i.test(birthday)) {
    birthday = birthday.replace(/-/gi, '/');
  }

  const formattedOccupation = occupation.join(', ');

  const formattedAppearance = appearance.join(', ');

  const bcsFormattedAppearance = better_call_saul_appearance.join(', ');

  return {
    name,
    nickname,
    img,
    status,
    portrayed,
    formattedOccupation,
    formattedAppearance,
    bcsFormattedAppearance,
    birthday
  };
};

export interface IGetFormattedCharInfo {
  name: string;
  nickname: string;
  img: string;
  status: string;
  portrayed: string;
  formattedOccupation: string;
  formattedAppearance: string;
  bcsFormattedAppearance: string;
  birthday: string;
}
