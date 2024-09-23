import './ThemePicker.css'

function ThemePicker({changeSvgColor}) {

    return (
        <div className="themePicker">

            <div className="themePickerItem">
                <h4>Background-stroke-color:</h4>
                <input
                    type="color"
                    onChange={(e) => changeSvgColor(e.target.value)}
                />
            </div>
            <div className="themePickerItem">
                <h4>Background-color:</h4>
                <input
                    type="color"
                    onChange={(e) => changeSvgColor(e.target.value)}
                />
            </div>
        </div>
    )
}

export default ThemePicker
