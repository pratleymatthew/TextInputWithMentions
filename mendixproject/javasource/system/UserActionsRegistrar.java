package system;

import com.mendix.core.actionmanagement.IActionRegistrator;

public class UserActionsRegistrar
{
  public void registerActions(IActionRegistrator registrator)
  {
    registrator.bundleComponentLoaded();
    registrator.registerUserAction(aqcommon.actions.CloneFileDocument.class);
    registrator.registerUserAction(aqcommon.actions.DecryptStringWithPrivateKey.class);
    registrator.registerUserAction(aqcommon.actions.EncryptStringWithPublicKey.class);
    registrator.registerUserAction(aqcommon.actions.EscapeXml.class);
    registrator.registerUserAction(aqcommon.actions.ExecuteJMESPathExpression.class);
    registrator.registerUserAction(aqcommon.actions.ExecuteOQLQuery.class);
    registrator.registerUserAction(aqcommon.actions.ExecuteXPathQuery.class);
    registrator.registerUserAction(aqcommon.actions.GenerateRandomPassword.class);
    registrator.registerUserAction(aqcommon.actions.GenerateUUID.class);
    registrator.registerUserAction(aqcommon.actions.GetApplicationUrl.class);
    registrator.registerUserAction(aqcommon.actions.GetFileContentsFromResource.class);
    registrator.registerUserAction(aqcommon.actions.GetFileContentsFromTemp.class);
    registrator.registerUserAction(aqcommon.actions.GetFileSeparator.class);
    registrator.registerUserAction(aqcommon.actions.GetLastItemInList.class);
    registrator.registerUserAction(aqcommon.actions.GetListItemByIndex.class);
    registrator.registerUserAction(aqcommon.actions.GetObjectById.class);
    registrator.registerUserAction(aqcommon.actions.GetObjectId.class);
    registrator.registerUserAction(aqcommon.actions.SignStringWithPrivateKey.class);
    registrator.registerUserAction(aqcommon.actions.SplitToStringItemList.class);
    registrator.registerUserAction(aqcommon.actions.StringLeftPad.class);
    registrator.registerUserAction(aqcommon.actions.VerifySignedStringWithPublicKey.class);
    registrator.registerUserAction(mendixsso.actions.CalculateOpenIDFromUUID.class);
    registrator.registerUserAction(mendixsso.actions.DecryptString.class);
    registrator.registerUserAction(mendixsso.actions.DeleteExpiredAuthRequests.class);
    registrator.registerUserAction(mendixsso.actions.DeleteExpiredTokens.class);
    registrator.registerUserAction(mendixsso.actions.EncryptString.class);
    registrator.registerUserAction(mendixsso.actions.ExtractUUIDFromOpenID.class);
    registrator.registerUserAction(mendixsso.actions.FindOrCreateUserWithUserInfo.class);
    registrator.registerUserAction(mendixsso.actions.GenerateRandomPassword.class);
    registrator.registerUserAction(mendixsso.actions.GetTokenEndpointURI.class);
    registrator.registerUserAction(mendixsso.actions.GetUserInfoEndpointURI.class);
    registrator.registerUserAction(mendixsso.actions.GetUserProfileFromUserInfoJSON.class);
    registrator.registerUserAction(mendixsso.actions.InitializeUserMapper.class);
    registrator.registerUserAction(mendixsso.actions.LoadBooleanValueFromEnvOrDefault.class);
    registrator.registerUserAction(mendixsso.actions.LoadStringValueFromEnvOrDefault.class);
    registrator.registerUserAction(mendixsso.actions.LogOutUser.class);
    registrator.registerUserAction(mendixsso.actions.StartSignOnServlet.class);
    registrator.registerUserAction(mxmodelreflection.actions.ReplaceToken.class);
    registrator.registerUserAction(mxmodelreflection.actions.SyncObjects.class);
    registrator.registerUserAction(mxmodelreflection.actions.TestThePattern.class);
    registrator.registerUserAction(mxmodelreflection.actions.ValidateTokensInMessage.class);
    registrator.registerUserAction(system.actions.VerifyPassword.class);
  }
}
