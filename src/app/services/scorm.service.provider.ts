import { HttpClient } from "@angular/common/http";
import { ScormApi } from "../models/scorm-api";
import { ScormService } from "./scorm.service";

export const ScormServiveFactory = (http:HttpClient) => {
    let scormApi = new ScormApi();
    //@ts-ignore
    window.API = scormApi;
    console.log(window);
    return new ScormService(http,scormApi);
}