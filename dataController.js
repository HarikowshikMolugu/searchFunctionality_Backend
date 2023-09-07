const fs = require('fs');
const path = require('path');


const jsonFilePath = path.join(__dirname, 'gistfile1.json');

exports.getData = (req, res) => {
    const { filter } = req.params;


    try {
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        const data = JSON.parse(jsonData);

        if (filter == 'null') {
    
            res.status(200).json(data);
        } else if (filter !== "") {
          
            const filteredData = data.filter(item => {
                function deepSearch(obj) {
                    for (const key in obj) {
                        if (typeof obj[key] === 'string' && obj[key].includes(filter)) {
                            return true;
                        }
                        if (typeof obj[key] === 'number' && obj[key].toString().includes(filter)) {
                            return true;
                        }
                        if (typeof obj[key] === 'object') {
                            if (deepSearch(obj[key])) {
                                return true;
                            }
                        }
                        if (Array.isArray(obj[key])) {
                            for (const subItem of obj[key]) {
                                if (deepSearch(subItem)) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                }

                return deepSearch(item);
            });

            console.log('Filter:', filter);

            res.status(200).json(filteredData);
        } else {
            console.log('Filter:', "empty");
            res.status(200).json([]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting data" });
    }
};
