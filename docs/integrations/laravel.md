---
title: Laravel
---

This package is a Laravel integration for the Grid.js. The packages makes it easy to create data-grid for your Laravel application, for example admin panel lists. It covers the basic server side functionalities for Grid.js like search, sorting and pagination.

GitHub: https://github.com/wdev-rs/laravel-datagrid

## Installation

You can install the package via composer:

```bash
composer require wdev-rs/laravel-datagrid
```

Install the Vue.js integration:

```bash
npm install gridjs-vue
```

Publish the vendor files by running

```bash
php artisan vendor:publish --provider="WdevRs\LaravelDatagrid\LaravelDatagridServiceProvider"
```

Register the DataGrid fronted Vue.js component by adding the following line to your `app.js`:

```javascript
require('./vendor/laravel-datagrid/laravel-datagrid');
```

## Usage
The base of this package is the `\WdevRs\LaravelDatagrid\DataGrid\DataGrid` class. This class is used to define the 
columns and the behavior of the datagrid. While you can use this class directly from the controller, I'll 
suggest extending it and create separate classes for each datagrid.

``` php
class CategoriesDataGrid extends DataGrid
{

    /**
     * CategoriesDataGrid constructor.
     */
    public function __construct()
    {
        $this->query(Category::query())
            ->column('id', 'ID', null, 50)
            ->column('name', 'Name', function ($category) {
                return view('admin.categories.actions.edit_link', ['category' => $category])->render();
            })
    }
}
```

Using the `query` method you can define what should be the base query for the DataGrid. It accepts a Laravel Query Builder object.
The `column` method is used to define the columns of the DataGrid, the argument are as follows:
- `id` - the name of the field in the database
- `name` - the label which should appear in the DataGrid column header
- `formatter` - optional, callable allows you to format the display of the column. As you can see from the above example
  probably the most elegant way to do this is to include a blade view and render it.
- `width` - optional, the with of the column

When the DataGrid definition is ready, you can add it to the controller:

```php
    public function index(CategoriesDataGrid $dataGrid, Request $request)
    {
        return $dataGrid->render();
    }
```

If the `render` method is called without arguments it will use the default view `resources/views/vendor/laravel-datagrid/datagrid.blade.php`, 
or you can pass your own view and include the DataGrid blade file there:

```php
    public function index(CategoriesDataGrid $dataGrid, Request $request)
    {
        return $dataGrid->render('admin.common.index');
    }
```

## Credits

- [Daniel Werner](https://github.com/wdev-rs)

## License

The MIT License (MIT)
