<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password'); section>
<div class="${properties.kcLoginContainer!}" style="
    display: flex;
    justify-content: center;
    width: 100%;
">
    <#if section = "header">        
    <div id="kc-form-wrapper" >    
    <#elseif section = "form">
        <div id="kc-form-wrapper" style="
    ">
            <form id="kc-form-login" action="${url.loginAction}" method="post" style="
                width: 100%;
                max-width: 350px; 
                padding: 0 15px; 
                box-sizing: border-box;">
                <#if !usernameHidden??>
                    <div class="form-group"
                        >
                        <label for="username"
                            style="
                            display: block;
                            color: #43644f;              
                            margin-bottom: 0.5rem;
                            font-weight: 600;             
                            font-size: 0.95rem;           
                            letter-spacing: 0.3px;        
                        "
                        >Usuario</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            class="form-control" 
                            autofocus 
                            autocomplete="username"
                            value="${(login.username!'')}" 
                            style="
                            width: 100%;
                            padding: 0.8rem 1rem;     
                            border: 2px solid #43644f; 
                            border-radius: 6px;       
                            background-color: #f9f5f2; 
                            color: #43644f;           
                            font-size: 1rem;
                            transition: all 0.3s ease; 
                            box-shadow: none;
                            outline: none;
                        ">
                            <#if messagesPerField.existsError('username','password')>aria-invalid="true"</#if>
                        
                        <#if messagesPerField.existsError('username','password')>
                            <span class="error-message">${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}</span>
                        </#if>
                    </div>
                </#if>

                <div class="form-group"
                    style="
                    margin-bottom: 1.5rem;
                    position: relative;
                "
                >
                    <label for="password"
                        style="
                        display: block;
                        color: #43644f;              
                        margin-bottom: 0.5rem;
                        font-weight: 600;            
                        font-size: 0.95rem;          
                        letter-spacing: 0.3px;        
                    "
                    >Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        class="form-control" 
                        autocomplete="current-password"
                        style="
                        width: 100%;
                        padding: 0.8rem 1rem;     
                        border: 2px solid #43644f; 
                        border-radius: 6px;      
                        background-color: #f9f5f2; 
                        color: #43644f;          
                        font-size: 1rem;
                        transition: all 0.3s ease; 
                        box-shadow: none;
                        outline: none;
                    ">
                        <#if messagesPerField.existsError('username','password')>aria-invalid="true"</#if>
                    
                </div>

                <#if realm.rememberMe && !usernameHidden??>
                    <div class="checkbox-group">
                        <input type="checkbox" id="rememberMe" name="rememberMe"><#if login.rememberMe??>checked</#if> />
                        <label for="rememberMe">Remember me</label>
                    </div>
                </#if>

               <div class="form-actions" style="margin-top: 1.8rem; display: flex; justify-content: center;">
                <button type="submit" class="login-button"
                    style="                        
                        padding: 0.8rem;
                        background-color: #b46e3f;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        font-size: 1rem;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 4px #b46e3f;
                    "
                    >Inicio de sesión</button>
                </div>

                <#if realm.resetPasswordAllowed>
                    <div class="forgot-password">
                        <a href="${url.loginResetCredentialsUrl}">Forgot your password?</a>
                    </div>
                </#if>
            </form>
        </div>
    
    </div>
    </#if>
</div>
</@layout.registrationLayout>