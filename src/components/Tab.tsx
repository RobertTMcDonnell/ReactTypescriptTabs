import * as React from 'react';

/*
    Credit https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69 for original
    js files, edited by Robert McDonnell to convert to typescript
*/

export interface Props {
    onClick      ?: Function;
    tabIndex     ?: Number;
    isActive     ?: Boolean;
    iconClassName: String;
    linkClassName: String;
}
  
function Tab ({
    onClick = function(){return; },
    tabIndex = '',
    isActive = '',
    iconClassName = '',
    linkClassName = ''
}: Props) {
    return (
        <li className="tab">
            <a 
                className={`tab-link ${linkClassName} ${isActive ? 'active' : ''}`}
                onClick={(event) => {
                    event.preventDefault();
                    onClick(tabIndex);
                }}
            >
                {linkClassName}
                <i className={`tab-icon ${iconClassName}`}/>
            </a>
        </li>
    );
}
export default Tab;