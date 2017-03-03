import * as sql from "sqlite3";
import os = require("os");
import path = require("path");
import mkdirp = require("mkdirp");

class SagittaPartsLibrary {
    private db: sql.Database;
    private searchPaths: Set<string> = new Set<string>();

    constructor() {
        this.openDb();
    }

    public get SearchPaths(): Set<string> {
        return this.searchPaths;
    }

    public generatePartsLibrary() {
        this.searchPaths.forEach((path) => {
            
        });
    }

    public insertOrUpdate(path: string) {
    }

    public partDescriptionIsValid(path: string): boolean {
        return true;
    }

    private openDb()
    {
        if (this.db) {
            throw new Error("Db already open");
        }

        let filepath = os.homedir();
        if (process.platform === "win32") {
            filepath = path.join(filepath, "Documents");
        }
        filepath = path.join(filepath, "Sagitta", "Designer", "PartsLibrary");
        mkdirp(filepath);
        filepath = path.join(filepath,"partslibrary.db");
        this.db = new sql.Database(filepath)
    }
}

export { SagittaPartsLibrary };