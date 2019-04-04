define({ "api": [
  {
    "type": "GET",
    "url": "/api/Author/?auth_name=Value",
    "title": "Find an author by name",
    "name": "Find_author_by_name",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "name-not-found",
            "description": "<p>Author could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author  not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_name",
            "description": "<p>Author Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Author",
            "description": "<p>data for the required Author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n\n {\n        \"_id\" : ObjectId(\"5c9284d5e0a57a14e749981a\"),\n        \"BookId\" : [\n                \"5c91157331557ebe471e0a12\"\n        ],\n        \"AuthorId\" : \"5c91157301d63f812a141932\",\n        \"AuthorName\" : \"Alberta Bean\",\n        \"Photo\" : \"http://placehold.it/32x32\",\n        \"FollowingUserId\" : [\n                \"5c9132dd99a8a3609cca3406\",\n                \"5c91344d99a8a3609cca3406\"\n        ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Find_an_author_by_name.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/api/Author/byid?auth_id=Value",
    "title": "Get info about author by id",
    "name": "Get_info_about_author_by_id",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>Author could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author  not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>Author ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Author",
            "description": "<p>data for the required Author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n\n {\n        \"_id\" : ObjectId(\"5c9284d5e0a57a14e749981a\"),\n        \"BookId\" : [\n                \"5c91157331557ebe471e0a12\"\n        ],\n        \"AuthorId\" : \"5c91157301d63f812a141932\",\n        \"AuthorName\" : \"Alberta Bean\",\n        \"Photo\" : \"http://placehold.it/32x32\",\n        \"FollowingUserId\" : [\n                \"5c9132dd99a8a3609cca3406\",\n                \"5c91344d99a8a3609cca3406\"\n        ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Get_info_about_an_author_by_id.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/Authors/unFollow",
    "title": "Unfollow an Author",
    "name": "Unfollow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>myuserId</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads Author ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Unfollow_an_author.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/Authors/Follow",
    "title": "follow an Author",
    "name": "follow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>myuserId</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads Author ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Follow_an_author.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/author_following/",
    "title": "Show author following information",
    "name": "get_Author_Following_Information",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Follow",
            "description": "<p>There is a follow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"followpresent\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "FollowID",
            "description": "<p>Geeksreads following id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Show_author_following_information.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/book/book.json",
    "title": "Find books by title, author, or ISBN. Gets found book",
    "version": "0.0.0",
    "name": "FindBooks",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book title to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Author",
            "description": "<p>Book Author to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book ISBN to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": true,
            "field": "Select",
            "defaultValue": "all",
            "description": "<p>Field to search,(default is 'all').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>Which page of results to show (default 1).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book-Title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorId",
            "description": "<p>Author-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book-ISBN.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "Published",
            "description": "<p>Date when book was published.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Publisher",
            "description": "<p>The name of the book's publisher.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Pages",
            "description": "<p>Number of book pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Small breifing about the book's contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cover",
            "description": "<p>Link that holds the book's cover picture.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Store",
            "description": "<p>Links for webpages that store the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Select",
            "optional": false,
            "field": "ReadStatus",
            "description": "<p>Read, Currently Reading, or Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BookRating",
            "description": "<p>Rating for the book.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"BookId\":\"5c911452bbfd1717b8a7a169\",\n  \"Title\":\"sit\",\n  \"AuthorId\":\"5c911452a48b42bb84bc785c\",\n  \"ISBN\":\"5c911452ce18b2b3276d4b45\",\n  \"Published\":\"2001-05-08 \",\n  \"Publisher\":\"COREPAN\",\n  \"Pages\":226.0,\n  \"Description\":\"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\\r\\n\",\n  \"Cover\":\"http://placehold.it/32x32\",\n  \"Store\":[\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\"],\n  \"ReadStatus\":\"Read\",\n  \"BookRating\":5.0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Book</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Author-not-found",
            "description": "<p>The <code>Author</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Find_books_by_title_author_or_ISBN.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/book/getreviews.json",
    "title": "Get the reviews for a book given a Geeksreads book id",
    "name": "GetReviewsbyBookId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n     \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_a_Goodreads_book_id.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/book/getreviews.json",
    "title": "Get the reviews for a book given an ISBN",
    "name": "GetReviewsbyBookIsbn",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isbn",
            "description": "<p>Book ISBN.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_an_ISBN.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/book/getreviews.json",
    "title": "Get the reviews for a book given a title string",
    "name": "GetReviewsbyBookTitle",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title_string",
            "description": "<p>Book title.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_a_title_string.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/bookids.json",
    "title": "Get Geeksreads book IDs given ISBNs",
    "name": "IsbntoId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "isbns",
            "description": "<p>Book-ISBNs.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "ids",
            "description": "<p>Book-IDs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"BookIds\": [5c911452bbfd1717b8a7a169,5c9114526f1439874b7cca1a]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Books-Not-Found",
            "description": "<p>Some or all of the ISBNs entered are not valid.</p>"
          }
        ]
      }
    },
    "filename": "./Get_Goodreads_book_IDs_given_ISBNs.js",
    "groupTitle": "Books"
  },
  {
    "type": "Get",
    "url": "/Review/Rate",
    "title": "Rate a Reviw",
    "version": "0.0.0",
    "name": "RateReviw",
    "group": "Books",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>the review ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Rating",
            "description": "<p>Number of stars must be integar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "RateSucc",
            "description": "<p>true if the rating was done</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n \"RateSucc\" :true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NotFound Review:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"No Review  were found\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Review-Not-Found",
            "description": "<p>The <code>Review</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./RateReview.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/book/reviewstatistics.json",
    "title": "Get review statistics given a list of ISBNs",
    "name": "ReviewStatistics",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "isbns",
            "description": "<p>Book ISBN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param",
          "content": "{\n  isbns=0441172717,0141439602\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "review-count",
            "description": "<p>Statistics of Book Reviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Number of reviews\": 80\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Books-Not-Found",
            "description": "<p>Some or all of the ISBNs entered are not valid.</p>"
          }
        ]
      }
    },
    "filename": "./Get_review_statistics_given_a_list_of_ISBNs.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/id_to_work_id",
    "title": "Get Geeksreads work IDs given Geeksreads book IDs",
    "name": "id_to_work_id",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "work_id",
            "description": "<p>Book Work ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>work_id</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_Goodreads_work_IDs_given_Goodreads_book_IDs.js",
    "groupTitle": "Books"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Hisa_EL_Zankaloni_Desktop_Geeksreads_Backend_APIs_with_Documentation_doc_main_js",
    "groupTitle": "C__Users_Hisa_EL_Zankaloni_Desktop_Geeksreads_Backend_APIs_with_Documentation_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedCommentSuc",
            "description": "<p>comment was added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"AddedCommentSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "type": "POST",
    "url": "/comment.json",
    "title": "Create a comment",
    "name": "creatComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>The body of the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "BookID",
            "description": "<p>Id of Book the review commented on belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ReviewID",
            "description": "<p>Id of review the comment belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of user who wrote the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userID",
            "description": "<p>Id of user who wrote the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date the comment was written on</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyComment",
            "description": "<p>Must Have At Least <code>1</code> Character In Comment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Comment.js",
    "groupTitle": "Comments"
  },
  {
    "type": "GET",
    "url": "/comment.json",
    "title": "List comments on a subject",
    "name": "listCommentsOnSubject",
    "group": "Comments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>no comments on this subject</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"comment\":[\n        {\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n        },......\n]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Id of the review the comments belong to</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Comment.js",
    "groupTitle": "Comments"
  },
  {
    "type": "DELETE",
    "url": "/owned_books/destroy/ID",
    "title": "Delete an owned book",
    "name": "DELETEOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ownedBookId",
            "description": "<p>ownedBookId is a unique identifier for the owned book (not a book_id).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User_ID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Book_ID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Delete_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "get",
    "url": "/owned_books/",
    "title": "List books owned by a user",
    "name": "GetOwnedBooks",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Geeksware user_id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 0k",
          "content": "     HTTP/1.1 200 0k\n{\n     \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./List_books_owned_by_a_user.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "get",
    "url": "/owned_books/show/OWNED_BOOK_ID",
    "title": "Show an owned book",
    "name": "GetOwned_Books_Show",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_owner_id",
            "description": "<p>the current owner's user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "OWNED_BOOK_ID",
            "description": "<p>a unique identifier for the owned book (not a book_id).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "BookName",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 0k",
          "content": "     HTTP/1.1 200 0k\n{ \n     \"BookName\":\"FRIENDS\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Show_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "post",
    "url": "/owned_books.json",
    "title": "Add to books owned",
    "name": "PostOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookid",
            "description": "<p>id of the book required</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": false,
            "field": "conditionCode",
            "description": "<p>one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionDescription",
            "description": "<p>description of book's condition</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "originalPurchaseDate",
            "description": "<p>when book was purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "originalPurchaseLocation",
            "description": "<p>where this book was purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Owned_Book_ID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User_ID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Add_to_books_owned.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "put",
    "url": "/owned_books/update",
    "title": "Update an owned book",
    "name": "PutOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ownedBookId",
            "description": "<p>id of the owned book record.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>Id of the book.</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": false,
            "field": "conditionCode",
            "description": "<p>one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionDescription",
            "description": "<p>description of book's condition.</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "originalPurchaseDate",
            "description": "<p>When book was purchased.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originalPurchaseLocation",
            "description": "<p>Where this book was purchased.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uniqueCode",
            "description": "<p>BookCrossing id (BCID).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Update_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "delete",
    "url": "/rating",
    "title": "Unlike a resource",
    "group": "Resource",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ratingId",
            "description": "<p>Rating id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Unlike_a_resource.js",
    "groupTitle": "Resource",
    "name": "DeleteRating"
  },
  {
    "type": "post",
    "url": "/rating",
    "title": "Like a resource",
    "name": "PostRating",
    "group": "Resource",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Resource rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resourceId",
            "description": "<p>Id of the resource being liked.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resourceType",
            "description": "<p>Camel case name of the resource type (e.g. UserStatus, Review).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Like_a_resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "POST",
    "url": "/geeksreads/:review",
    "title": "Create New review",
    "name": "addReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notresolved",
            "description": "<p>one of the parameters must have not resolved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedReviewSuc",
            "description": "<p>review was added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"AddedReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>The body of the review</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "BookID",
            "description": "<p>Id of Book the review belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of user who wrote the review</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userID",
            "description": "<p>Id of user who wrote the review</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date the review was written on</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Stars",
            "description": "<p>Rating (0-5) (optional, default is 0 (No rating))</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shelf",
            "description": "<p>the shlef the book is placed in by the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "DELETE",
    "url": "/geeksreads/:review",
    "title": "Delete review",
    "name": "deletereview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>the review you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "deleteReviewSuc",
            "description": "<p>review was deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"deleteReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "review_Id",
            "description": "<p>Id of the review to be deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "PUT",
    "url": "/geeksreads/:review",
    "title": "edit review using id",
    "name": "editReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotResolved",
            "description": "<p>one of the parameters must have not resolved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "editReviewSuc",
            "description": "<p>review was edited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"editReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "Review_Id",
            "description": "<p>review Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>Text of the review (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Stars",
            "description": "<p>Rating (0-5) (optional, default is 0 (No rating))</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "readAt",
            "description": "<p>Date (YYYY-MM-DD format, e.g. 2008-02-01)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shelf",
            "description": "<p>read|currently-reading|to-read|<USER SHELF NAME>(optional, must exist, see: shelves.list)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "GET",
    "url": "/geeksreads/:review",
    "title": "Get review by review id",
    "name": "getReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>review  you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each review,comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"review\":{\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"}\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "review_Id",
            "description": "<p>Id of the review</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "GET",
    "url": "/geeksreads/:review",
    "title": "Get review by Book",
    "name": "getReviewsByBook",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>review  you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote review</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote review</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"reviews\":[{\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n         },.......\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "user_Id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "book_id",
            "description": "<p>Id of the book</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "include_review_on_work",
            "description": "<p>View another review of the book if the review was not found default is <code>false</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "POST",
    "url": "/Shelf/AddShelf.json",
    "title": "Add a New Shelf",
    "name": "AddShelf",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Bolean",
            "optional": false,
            "field": "ExclusiveFlag",
            "defaultValue": "false",
            "description": "<p>Set Shelf as Exclusive (Default is Shelf not Exclusive).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ShelfName",
            "description": "<p>Shelf Name.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies User that the Shelf was Added Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Shelf was Created Successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidShelf-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":\"InValid Shelf Name\"\n}",
          "type": "json"
        },
        {
          "title": "ShelfExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Shelf Already Exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/Shelf/AddToShelf.json",
    "title": "Add a Book to a Shelf",
    "name": "AddToShelf",
    "group": "Shelves",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ShelfId",
            "description": "<p>Shelf Id to add book to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book id to add to shelf.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies User that the Book was added successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Book was added successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoBook-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":\"Book Doesn't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "NoShelf-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Shelf Does't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "post",
    "url": "/Shelf/AddBooksToShelves.json",
    "title": "Add Books to Many Shelves",
    "version": "0.0.0",
    "name": "AddToShelves",
    "group": "Shelves",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ShelIds",
            "description": "<p>Shelf Ids(List).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "BookIds",
            "description": "<p>Book ids to add to shelves(List).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Books Added Successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Books were Added Successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoBook-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":\"Book Doesn't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "NoShelf-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Shelf Does't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/Shelf/EditShelf.json",
    "title": "Edits a Shelf",
    "name": "EditShelf",
    "group": "Shelves",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ShelfId",
            "description": "<p>Shelf Id to edit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies User that the Shelf was Edited successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Shelf was Edited Successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelf-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Shelf Does't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/Shelf/GetUserShelves.json",
    "title": "Gets All User's Shelves",
    "name": "GetUserShelves",
    "group": "Shelves",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "UserShelves",
            "description": "<p>Gives the User the Ids of His Shelves.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserShelves\": [\n                     \"Shelf1\",\n                     \"Shelf2\",\n                     \"Shelf3\"\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelvesExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User has No Shelves\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "Post",
    "url": "/user_status/delete",
    "title": "Delete User Status",
    "version": "0.0.0",
    "name": "DeleteStatus",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "StatusId",
            "description": "<p>Status id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "DeleteStatusSuc",
            "description": "<p>if the delete happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"DeleteSTatusSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>StatusID</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Delete_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "GET",
    "url": "/Shelf/GetUserReadStatus.json",
    "title": "Gets information about a read Status update",
    "name": "GetUserReadStatus",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "StatusId",
            "description": "<p>The Status Read Id that was Updated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Gives the User  Id that Updated the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Gives the User the Id of the Review on the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CommentId",
            "description": "<p>Gives the User the Id of the Comment on the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "StatusBody",
            "description": "<p>Gives the User the Body of the Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "StatusDate",
            "description": "<p>Gives the User the Date of the Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserId\":\"5c9132dd1c5d63da0a184964\",\n  \"ReviewId\":\"5c9243a5311a20ca08d1844d\",\n  \"StatusBody\":\"Officia adipisicing cillum in minim ut incididunt non. Reprehenderit labore duis minim reprehenderit minim esse excepteur irure anim incididunt id. Minim eiusmod proident officia voluptate esse esse enim dolor minim officia labore enim.\\r\\n\",\n  \"StatusDate\":\" 2018-12-12T07:50:35 -02:00\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoStatus-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Invalid Status Id\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "Status"
  },
  {
    "type": "Get",
    "url": "/user_status/show",
    "title": "Get User Status",
    "version": "0.0.0",
    "name": "GetUserStatuses",
    "group": "Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "StatusId",
            "description": "<p>status id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User id the user who is to see the status</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "StatusDate",
            "description": "<p>the date when the status was written</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>comment id if the type is comment <code>(optional)</code></p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>review Id  alawys exisit weather the type is comment or review</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerId",
            "description": "<p>the id of the user who made the status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Type",
            "description": "<p>Wheather  it is Comment or Review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\ntype : Review \nStatusId : \"82978363763\"\nMakerId : \"shjfhghdsg\"\nUserId : \"82sdfd8363763\"\nReviewId : \"82gf8363763\"\n\n}, \n{\n\ntype : Comment\nCommentId : \"hisadsfjhdld\"  \nStatusId : \"82978363763\"\nMakerId : \"shjfhghdsg\"\nUserId : \"82sdfd8363763\"\nReviewId : \"82gf8363763\"\n.......\n},.....",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NotFound statuses:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"No statuses were found\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Get_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "Post",
    "url": "/user_status/",
    "title": "Update user status",
    "version": "0.0.0",
    "name": "UpdateUserStatuses",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "StatusID",
            "description": "<p>status id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "StatusBody",
            "description": "<p>the body of this status</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "StatusDate",
            "description": "<p>the date when the status was written</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>comment id <code>(optional)</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p><code>(optional)</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "UpdateSucc",
            "description": "<p>if the update happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{ \n \"UpdateSucc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Update_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "POST",
    "url": "/user/Verify.json",
    "title": "Verifies User From Email",
    "name": "EmailVerify",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies that User is Confirmed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"User Confirmed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/Users/Follow",
    "title": "Follow a user",
    "name": "Follow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>userId_tobefollowed</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Follow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId_tobefollowed",
            "description": "<p>GoodReads User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Follow_a_user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/me/GetUser.json",
    "title": "Gets Information of Current User",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>UserName of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "FollowingAuthorId",
            "description": "<p>Ids of Authors Current User is Following</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "FollowingUserId",
            "description": "<p>Ids of Users Current User is Following</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "FollowersUserId",
            "description": "<p>Ids of Users Following Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "OwnedBookId",
            "description": "<p>Ids of Books Owned by Current User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"FollowingAuthorId\": [],\n    \"FollowingUserId\": [],\n    \"FollowersUserId\": [],\n    \"OwnedBookId\": [],\n    \"ShelfId\": [],\n    \"Confirmed\": true,\n    \"UserName\": \"Ahmed1913\",\n    \"UserEmail\": \"AhmedAmrKhaled@gmail.com\",\n    \"UserId\": \"5ca23e81783e981f88e1618c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "UnConfirmedUser-Response:",
          "content": "   HTTP/1.1 401\n{\n   \"ReturnMsg\" :'Your account has not been verified.'\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/auth_user",
    "title": "Get id of user who authorized OAuth",
    "name": "GetUserID",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>User could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"ID\": 25468\n}",
          "type": "Number"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Get_id_of_user_who_authorized_OAuth.js",
    "groupTitle": "User"
  },
  {
    "type": "Get",
    "url": "/notifications",
    "title": "See the current user's notifications",
    "version": "0.0.0",
    "name": "GetUserNotification",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserID",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "Seen",
            "description": "<p>if the user saw it or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>the body of the notification</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "the",
            "description": "<p>date when the notification was sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{ \n\"Seen\": false\n\"Body\" : \"You have a friend request\"\n\"date\": \"2019-01-02T09:00:16.204\"\n},\n { \n\"Seen\": true\n\"Body\" : \"You have a friend request\"\n\"date\": \"2019-01-02T09:00:16.204\"\n},.....",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./See_the_current_user's_notifications.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/userID",
    "title": "Get User's Followers",
    "version": "0.0.0",
    "name": "GetUserfollowers",
    "group": "User",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User-ID",
            "description": "<p>User ID to get his/her Followers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>page to preview results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "UserIDs",
            "description": "<p>IDs of the Followers(List).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserIDs\": [2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID-not-found",
            "description": "<p>The <code>User-ID</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_User's_Followers.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/USER_ID/following.json",
    "title": "Get people a user is following",
    "version": "0.0.0",
    "name": "GetUserfollowings",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User-ID",
            "description": "<p>User ID to get his/her Followers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>page to preview results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "UserIDs",
            "description": "<p>IDs of the people the User is Following(List).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserIDs\": [2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID-not-found",
            "description": "<p>The <code>User-ID</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_people_a_user_is_following.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/SignIn.json",
    "title": "Signing in by Email and Password",
    "name": "SignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>Password of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Log in Successful.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of User after Successfully Signing in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Authentication Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Log in Successful.\",\n       \"UserId\": \"5ca23e81783e981f88e1618c\",\n       \"Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EyM2U4MTc4M2U5ODFmODhlMTYxOGMiLCJpYXQiOjE1NTQxMzcxMjJ9.rUfROgeq1wgmsUxljg_ZLI2UbFMQubHQEYLKz2zd29Q\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidEmailorPassword-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Invalid email or password.\"\n}",
          "type": "json"
        },
        {
          "title": "UnConfirmedUser-Response:",
          "content": "   HTTP/1.1 401\n{\n  \"ReturnMsg\" :'Your account has not been verified.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/SignUp.json",
    "title": "Signs User Up and Sends Verification Email",
    "name": "SignUp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>User Name to Sign Up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>User Email to Sign Up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>User Password to Sign Up.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies that User a verification Email is sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"A verification email has been sent to UserEmail.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidName-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\": \"\\\"UserName\\\" length must be at least 3 characters long\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidEmail-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\": \"\\\"UserEmail\\\" must be a valid email\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidPassword-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"\\\"UserPassword\\\" length must be at least 6 characters long\"\n}",
          "type": "json"
        },
        {
          "title": "ExistingEmail-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\":\"User already registered.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./MohamedAshraf UpdatedApis.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/Users/unFollow",
    "title": "Unfollow a user",
    "name": "Unfollow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>userId_tobefollowed</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId_tobefollowed",
            "description": "<p>GoodReads User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Unfollow_a_user.js",
    "groupTitle": "User"
  }
] });
