import React,{useEffect} from "react";

const SearchList = ({ list, users }) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(obj => <tr key={obj.id}>
                    <td>{obj.name}</td>
                    <td>{users.find(user => user.id === obj.personId)?.name || '未知'}</td>
                </tr>)
            }
        </tbody>
    </table>
}

export default SearchList;