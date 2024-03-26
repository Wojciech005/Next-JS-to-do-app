export default function CheckboxPage({taskStatus}) {

    
    return(
        <>
        <div>
            <label>
            <input type="checkbox"  className=" accent-yellow-300 w-6 h-6" checked={taskStatus} readOnly/>
            </label>
        </div>
        </>
    )
}