export class ScormApi{
    constructor(){
        
    }

    LMSInitialize():string{
        console.log('lms init');
        return 'true';
    }

    LMSFinish():string {
        console.log('lms finish');
        return 'true';
    }

    LMSGetValue(element:any):string{
        console.log('get value',element);
        return '';
    }
    
    LMSSetValue(element:any, value:any):string{
        console.log('set value',element,value);
        return '';
    }

    LMSCommit(str:any):string{
        console.log('commit',str);
        return ''
    }
    
    LMSGetLastError():string{
        console.log('lms get last error')
        return '';
    }
    
    LMSGetErrorString(errorCode:any):string{
        console.log('lms get error string',errorCode);
        return '';
    }

    LMSGetDiagnostic(errocCode:any):string{
        console.log('lms get diagnostic',errocCode)
        return '';
    }

    Initialize():string{
        console.log('lms init');
        return 'true';
    }

    Terminate():string {
        console.log('lms finish');
        return 'true';
    }

    GetValue(element:any):string{
        console.log('get value',element);
        return '';
    }
    
    SetValue(element:any, value:any):string{
        console.log('set value',element,value);
        return '';
    }

    Commit(str:any):string{
        console.log('commit',str);
        return ''
    }

    GetLastError():string{
        console.log('lms get last error')
        return '';
    }
    
    GetErrorString(errorCode:any):string{
        console.log('lms get error string',errorCode);
        return '';
    }

    GetDiagnostic(errocCode:any):string{
        console.log('lms get diagnostic',errocCode)
        return '';
    }
}