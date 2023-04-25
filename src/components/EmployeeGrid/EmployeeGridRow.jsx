import { useCallback, useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './EmployeeGridRow.css';

export const EmployeeGridRow = ({ rowData, columns }) => {
    const navigate = useNavigate();

    const [hoverRef, isHovered] = useHover();

    const onRowClick = useCallback(() => {
        navigate(`/employee/${rowData.id}`);
    }, [navigate, rowData]);

    function useHover() {
        const [value, setValue] = useState(false);
        const ref = useRef(null);
        const handleMouseOver = () => setValue(true);
        const handleMouseOut = () => setValue(false);
        useEffect(
          () => {
            const node = ref.current;
            if (node) {
              node.addEventListener("mouseover", handleMouseOver);
              node.addEventListener("mouseout", handleMouseOut);
              return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
              };
            }
          },
          [ref.current] 
        );
        return [ref, value];
      }


    const cells = columns.map(({ dataKey, renderCell }) => <td>{renderCell ? renderCell(rowData[dataKey], rowData) : rowData[dataKey]}</td>);
    return <tr onClick={onRowClick}   ref={hoverRef}  className = {isHovered ? "table-row-hovered" : "table-row" } >  {cells}</tr>;
}