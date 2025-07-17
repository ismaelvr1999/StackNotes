import { ResultSet } from "react-native-sqlite-storage";

export default function mapRowsToArrays<T>  (results:ResultSet[]) {
    let items: T[] = [];
    results.forEach(result =>{
    for (let index = 0; index < result.rows.length; index++) {
        items.push(result.rows.item(index));
      }
    });
    return items;
}