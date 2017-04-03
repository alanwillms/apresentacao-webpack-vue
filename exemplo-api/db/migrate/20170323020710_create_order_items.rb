class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.references :order, foreign_key: true
      t.references :product, foreign_key: true
      t.integer :amount
      t.decimal :unit_value
      t.decimal :total_value

      t.timestamps
    end
  end
end
