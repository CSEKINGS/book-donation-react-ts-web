import useSound from "use-sound";
import * as Assets from "src/assets";

export const Play = () => {
  const [play] = useSound(Assets.sound.Fruit);
  return play;
};
