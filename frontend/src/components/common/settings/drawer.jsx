import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import Slider from 'rc-slider';
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import store from "../../../store";
import { toggleSettingDrawer } from "../../../store/ui/global";

const SettingDrawer = () => {
    const show = useSelector((store) => store.ui.global.showSettingDrawer);

    const [zoom, setZoom] = useState(Number(localStorage.getItem("zoom") || 100));
    const [textSize, setTextSize] = useState(Number(localStorage.getItem("textSize") || 100));
    const [brightness, setBrightness] = useState(Number(localStorage.getItem("brightness") || 100));
    const [hueRotate, setHueRotate] = useState(Number(localStorage.getItem("hueRotate") || 0));

    const onZoomChange = (value) => {
        setZoom(value);
        localStorage.setItem("zoom", value);
    }

    const onTextSizeChange = (value) => {
        setTextSize(value);
        localStorage.setItem("textSize", value);
    }

    const onBrightnessChange = (value) => {
        setBrightness(value);
        localStorage.setItem("brightness", value);
    }

    const onHueRotateChange = (value) => {
        setHueRotate(value);
        localStorage.setItem("hueRotate", value);
    }

    useEffect(() => {
        document.getElementById("main-content").style.zoom = `${zoom}%`;
    }, [zoom]);

    useEffect(() => {
        document.getElementById("main-content").style.filter = `brightness(${brightness}%)` + ` hue-rotate(${hueRotate}deg)`;
    }, [brightness, hueRotate]);

    useEffect(() => {
        document.documentElement.style.fontSize = `${textSize}%`;
    }, [textSize]);

    return <div className={twMerge("fixed z-50 top-0 left-0 h-full border p-12 bg-white/90 backdrop-blur-lg w-1/2 transition-all duration-500", show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[50vw]")}>
        <div className="flex justify-end cursor-pointer" onClick={() => store.dispatch(toggleSettingDrawer())}><MdClose size={40} /></div>
        <div className="block font-bold text-3xl md:text-4xl">Settings</div>
        <div className="text-gray-600 text-xl mt-5 mb-12">Adjust the sliders till you get the desired interface.</div>
        <div className="font-bold text-2xl my-8">Content Zoom</div>
        <div className="flex gap-5 items-center">
            <Slider className="w-3/4 " trackStyle={{
                backgroundColor: '#a7e0fa',
            }} value={zoom} max={200} min={100} onChange={onZoomChange} />
            <p className="font-bold text-2xl mb-0.5">{zoom} %</p>
        </div>
        <div className="font-bold text-2xl my-8">Text Zoom</div>
        <div className="flex gap-5 items-center">
            <Slider className="w-3/4 " trackStyle={{
                backgroundColor: '#a7e0fa',
            }} value={textSize} max={200} min={100} onChange={onTextSizeChange} />
            <p className="font-bold text-2xl mb-0.5">{textSize} %</p>
        </div>
        <div className="font-bold text-2xl my-8">Brightness</div>
        <div className="flex gap-5 items-center">
            <Slider className="w-3/4 " trackStyle={{
                backgroundColor: '#a7e0fa',
            }} value={brightness} max={200} min={100} onChange={onBrightnessChange} />
            <p className="font-bold text-2xl mb-0.5">{brightness} %</p>
        </div>
        <div className="font-bold text-2xl my-8">Hue Rotate</div>
        <div className="flex gap-5 items-center">
            <Slider className="w-3/4 " trackStyle={{
                backgroundColor: '#a7e0fa',
            }} value={hueRotate} max={360} min={0} onChange={onHueRotateChange} />
            <p className="font-bold text-2xl mb-0.5">{hueRotate} deg</p>
            </div>
    </div>
};

export default SettingDrawer;