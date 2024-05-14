function updateRoutes(routes, subscription) {
    let redirectFlag = false;
    let result = [];

    function traverse(route) {
        const subscribed = subscription.find(sub => sub.name === route.name);
        let obj = {};

        if (!subscribed || !subscribed.isSub) {
            if (route.subComp) {
                obj.name = route.name;
                obj.comp = "UN";
                result.push(obj);
                delete route.subComp;
            } else {
                obj.name = route.name;
                obj.comp = "UN";
                result.push(obj);
            }
        } else {
            obj.name = route.name;
            obj.comp = route.comp;
            result.push(obj);
        }

        if (subscribed && subscribed.isSub && !redirectFlag) {
            redirectFlag = true;
            result[0].redirectTo = route.name;
        }

        if (route.subComp) {
            route.subComp.forEach(subRoute => traverse(subRoute));
        }
    }

    routes.forEach(route => traverse(route));

    return result;
}

// Example usage:
const routes = [
    { name: 'M1', comp: 'C1' },
    { name: 'M2', comp: 'C2' },
    { name: 'M3', subComp: [{ name: 'M3A', comp: 'C3A' }, { name: 'M3B', comp: 'C3B' }] },
    { name: 'M4', subComp: [{ name: 'M4A', comp: 'C4A' }, { name: 'M4B', comp: 'C4B' }] },
    { name: 'M5', subComp: [{ name: 'M5A', comp: 'C5A' }, { name: 'M5B', subComp: [{ name: 'M5BA', comp: 'C5BA' }, { name: 'M5BB', comp: 'C5BB' }, { name: 'M5BC', comp: 'C5BC' }] }, { name: 'M5C', comp: 'C5C' }] }
];

const subscription = [
    { name: 'M1', isSub: true },
    { name: 'M2', isSub: false },
    { name: 'M3', isSub: false, subMod: [{ name: 'M3A', isSub: true }, { name: 'M3B', isSub: true }] },
    { name: 'M4', isSub: true, subMod: [{ name: 'M4A', isSub: false }, { name: 'M4B', isSub: true }] },
    { name: 'M5', isSub: true, subMod: [{ name: 'M5A', isSub: false }, { name: 'M5B', isSub: true, subComp: [{ name: 'M5BA', isSub: false }, { name: 'M5BB', isSub: true }, { name: 'M5BC', isSub: false }] }, { name: 'M5C', isSub: true }] }
];

console.log(updateRoutes(routes, subscription));
