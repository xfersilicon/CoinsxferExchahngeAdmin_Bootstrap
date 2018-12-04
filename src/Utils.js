import React from "react";
import namor from "namor";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        TimeStamp: new Date().toLocaleString(),
        Coin: namor.generate({ words: 1, numbers: 0 }),
        Volume: Math.floor(Math.random() * 100),
        Token: Math.floor(Math.random() * 100),
        Price: Math.floor(Math.random() * 1000),
        Total: Math.floor(Math.random() * 1000),
        Type:
            statusChance > 0.66
                ? "Bought"
                : "Sold"
    };
};

export function makeData(len = 40) {
    return range(len).map(d => {
        return {
            ...newPerson()
        };
    });
}