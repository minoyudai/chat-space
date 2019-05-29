# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|index: true, null:false, unique: true|
|email|string|null: false|
|password|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|index: true, null:false, unique: true|


### Association
- belongs_to :user_id
- belongs_to :name


##massageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|index: true, null:false, unique: true|
|text|text|info|

### Association
- belongs_to :user_id
- belongs_to :name
