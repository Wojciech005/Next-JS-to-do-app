export default function CheckboxPage({taskStatus}) {

    
    return(
        <>
        <div>
            <label>
            <input type="checkbox"  className="accent-pink-500 w-6 h-6" checked={taskStatus} />
            </label>
        </div>
        </>
    )
}