// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package aqcommon.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class GetLastItemInList extends CustomJavaAction<IMendixObject>
{
	private java.util.List<IMendixObject> ListToExtractItemFrom;

	public GetLastItemInList(IContext context, java.util.List<IMendixObject> ListToExtractItemFrom)
	{
		super(context);
		this.ListToExtractItemFrom = ListToExtractItemFrom;
	}

	@java.lang.Override
	public IMendixObject executeAction() throws Exception
	{
		// BEGIN USER CODE
		if( ListToExtractItemFrom == null)
			return null;
		
		return this.ListToExtractItemFrom.get(
				this.ListToExtractItemFrom.size() -1 );
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "GetLastItemInList";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
