export const upDateObjectInArry = (items, itemId, objPropName, newObjectProps) => {
   return  items.users.map(u => {
        if (u["objPropName"] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u;
    })}