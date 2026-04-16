"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://dummyjson.com/products");
        const data = yield res.json();
        return data.products;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield fetchProducts();
    const under10 = products.filter(p => p.price < 10);
    console.log("under 10$ ", under10);
    const above10 = products.filter(p => p.price > 10);
    console.log("above 10$", above10);
    const nameAZ = [...products].sort((a, b) => a.title.localeCompare(b.title));
    console.log("A-Z", nameAZ);
    const nameZA = [...products].sort((a, b) => b.title.localeCompare(a.title));
    console.log("Z-A", nameZA);
    const byCategory = [...products].sort((a, b) => a.category.localeCompare(b.category));
    console.log("By Category", byCategory);
}))();
