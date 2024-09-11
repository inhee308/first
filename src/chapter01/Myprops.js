import React from 'react';

const Myprops = ({name,childern }) => {
    
    return (
        <div>
            안녕하세요 제 이름은 {name}입니다.<br />
            childern 값은 {childern}입니다.
        </div>
    );
};


export default Myprops;