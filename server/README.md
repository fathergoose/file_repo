# File Repo

## TODO:
Most of the rest API is finished, just need to make sure files are deleted from fs when deleted from db.
Accomplish this by figureing out how to return data from pg about the deleted record
Then 
```javascript
fs.unlink(data.path, function () {
	//handle the error!
})
```