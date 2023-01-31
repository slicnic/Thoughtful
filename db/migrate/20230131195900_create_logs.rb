class CreateLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :logs do |t|
      t.string :content
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :emotion, null: false, foreign_key: true

      t.timestamps
    end
  end
end
