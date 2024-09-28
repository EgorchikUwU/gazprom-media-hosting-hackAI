import { Input } from "../ui/Input";
import { useDispatch } from 'react-redux';

export const SelectVideoWindow = () => {
    const dispatch = useDispatch();
    return (
        <div className="select-file-tmp-container">
            <div className="select-file-tmp-wrapper">
                <label htmlFor="file">Выберите файл</label>
                <Input 
                    type="file"
                    onChange={(e:any) => {
                        // dispatch({ type: 'SET_TMP_NAME', payload: e.target.files[0].name})

                        const formData:any = new FormData();

                        formData.append('file', e.target.files[0])

                        if (formData && formData.get('file') && formData.get('file')?.type.includes('video/')) {
                            dispatch({ type: 'SET_TMP_NAME', payload: URL.createObjectURL(formData.get('file'))})
                            dispatch({ type: 'SET_FILE_NAME_DISPLAY', payload: 'none' })
                        } else {
                            // обводка красным
                        }
                    }}
                    className="set-file"
                    placeholder=""
                />
            </div>
        </div>
    );
} 