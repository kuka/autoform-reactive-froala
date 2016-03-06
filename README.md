# Froala v2 WYSIWYG editor
Froala v2 WYSIWYG editor for autoform with templating ability and S3 image upload.
Templating dropdowns can be assigned in schema by "customDropdowns" option, images are going to your S3 bucket by S3.knox client with "froala/" prefix

## Install

`meteor add kukasix:autoform-reactive-froala`

## Example:

```coffee
"doc.template":
    type: String
    autoform:
      type: "froalaEditor"
      afFieldInput:
        froalaOptions:
          theme: 'red'
          inlineMode: false
          buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'formatBlock', 'blockStyle', 'inlineStyle', 'align', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent', 'selectAll', 'createLink', 'insertImage', 'insertVideo', 'table', 'undo', 'redo', 'html', 'insertHorizontalRule', 'uploadFile', 'removeFormat', 'fullscreen']
          height: '400'
          customDropdowns:
            customerVariables:
              title: 'Customer Variables'
              icon:
                type: 'font'
                value: 'fa fa-user'
              options:
                'Signature': '[CustomerFirstName] [CustomerLastName]<br/>[CustomerSSN]<br/>[CustomerDOB]<br/>[CustomerAddressLine 1]<br/>[CustomerAddressLine2]<br/>[CustomerCity], [CustomerState]  [CustomerZip]'
                'First Name': '[CustomerFirstName]'
                'Last Name': '[CustomerLastName]'
                'SSN': '[CustomerSSN]'
                'DOB': '[CustomerDOB]'
                'Address Line 1': '[CustomerAddressLine1]'
                'Address Line 2': '[CustomerAddressLine2]'
                'City, State, Zip': '[CustomerCity], [CustomerState] [CustomerZip]'
                'Phone 1': '[CustomerPhone1]'
                'Phone 2': '[CustomerPhone2]'
                'Fax': '[CustomerFax]'
```

## Reactive

Reacitivity works, but the code’s a bit dirty as it was made to get a solution for existing Meteor codebase with Autoform. This repo is a hard fork of [froala:froala-reactive](https://github.com/froala/froala-reactive) and [alexche:autoform-froala-editor](https://github.com/alxche/autoform-froala-editor/).

## Pull Requests

Anyone wishing to clean the code is welcome to do so anytime.
