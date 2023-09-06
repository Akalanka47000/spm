import { MdSettings } from "react-icons/md";
import store from "../../../store";
import { toggleSettingDrawer } from "../../../store/ui/global";

const SettingFab = () => {
    return <MdSettings size={80} onClick={() => store.dispatch(toggleSettingDrawer())} className="text-3xl text-white fixed bottom-12 right-12 z-50 transform hover:rotate-180 transition-all duration-300 bg-primary-base rounded-full p-5 cursor-pointer" />;
};

export default SettingFab;