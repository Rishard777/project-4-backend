class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name, :image
      t.float :price
      t.timestamps
    end
  end
end
