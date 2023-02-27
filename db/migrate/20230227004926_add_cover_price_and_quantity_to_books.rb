class AddCoverPriceAndQuantityToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :cover, :string
    add_column :books, :price, :decimal
    add_column :books, :quantity, :integer, default: 2
  end
end
