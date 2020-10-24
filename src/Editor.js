import 'react-quill/dist/quill.snow.css';

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

// import { LocalContentContext } from '../../providers';

export const Editor = () => {
  // const { localStorageUpdating, localContent, setLocalContent } = useContext(
  //   LocalContentContext
  // );

  const [value, setValue] = useState('');

  useEffect(() => {
    const str = localStorage.getItem('LOGD_EDITOR');
    console.info('get string on load: ', str);
    if (str) {
      setValue(str);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('LOGD_EDITOR', value);
  }, [value]);

  return (
    <ReactQuill
      placeholder="Write something..."
      value={value}
      onChange={setValue}
      modules={{
        clipboard: {
          matchVisual: false,
        },
      }}
    />
  );
};
