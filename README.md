# Project Name

## Overview
* Describe the project in a sentence or two.
* Highlight key features about what the project offers. Don't put too many technical details here.
* If applicable, add a high-level diagram that shows the architecture of your project.

## Contact
* Provide the details of the project owner.
* Provide the details of at least one other person who can provide support for your project.

[Your Name](mailto:YOUR.NAME@thomsonreuters.com) - [The Hub](https://thehub.thomsonreuters.com/people/YOUR_ID_EG_012345) - [Git](https://git.sami.int.thomsonreuters.com/YOUR.NAME)

[Second Contact](mailto:SECOND.CONTACT@thomsonreuters.com) - [The Hub](https://thehub.thomsonreuters.com/people/SECOND_CONTACT_ID_EG_012345) - [Git](https://git.sami.int.thomsonreuters.com/SECOND.CONTACT)

# Other sections
* Add sections that give details on the key features you highlighted earlier.
* These sections can contain technical details and diagrams to help a user understand your project architecture/data structures/flow etc.

# Environments (If applicable to your project)
## Development
* Provide details of how to connect to your dev environment

## Staging
* Provide details of how to connect to your staging environment

## Production
* Provide details of how to connect to your prod environment


# Usage
## If your project is an API
* Provide a [link](http://example.com/) to your existing API documentation/swagger/etc OR
* Provide your API documentation in this README e.g.
```
    ## Registering a new Project
    **Endpoint**
    ```
    POST /v1/projects
    ```
    **Input**
    ```
    Authorization: Bearer <SAFE-jwt-signed-by-vault>
    {
        "name": "MyProject",
        "secret": "mysecret"
    }
    ```

    **Output**
    * On success

    ```
    200 OK
    {
        "uuid": "uuid-of-the-project"
    }
    ```

    * On failure

    ```
    500 Internal Server Error
    {
        "success": false
    }
    ```
```

## If your project is an SDK/Library
* Provide a [link](http://example.com/) to your existing documentation OR
* Provide usage examples in this README e.g.
```
    ## C++
    ### Event Struct
    The core data structure of this library.
    ```
    struct Event {
        unsigned int uiEventId;
        unsigned int uiSeverity;
        std::string strMessage;
    };
    ```

    ### Raising an Event
    **Function**
    ```
    bool EventLibrary::RaiseEvent(Event* pEvent);
    ```

    **Input**
    A pointer to an Event struct.

    **Output**
    * On success
    Event raised successfully.
    ```
    true
    ```

    * On failure
    Event not raised.
    ```
    false
    ```
    Common causes
    * Invalid pointer `pEvent`
    * Invalid value for `uiSeverity`

    ## C#
    ## Etc...
```

# Testing
* Provide details on the testing that your project has gone through.
* If these tests are runnable by the user, e.g. unit tests, provide details on how to do this.


# Roadmap
* List the headline items on the roadmap for your project. If it's functionally complete, then state that here.

# License
* Put your license details here, if applicable.