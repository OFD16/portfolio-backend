/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('role').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.integer('age');
        table.string('email', 100);
        table.text('user_image');
        table.jsonb('social_links'); //tek bir obje olcak
        table.text('introduction');
        table.text('description');
        table.jsonb('medias');                          //şüpheliyim
        table.specificType('marked_projects', 'int[]');
        table.specificType('marked_blogs', 'int[]');
        table.specificType('experiences', 'jsonb[]');
        table.specificType('education', 'jsonb[]'); //objeler arrayi olcak
        table.specificType('skills', 'jsonb[]');
        table.string('sign_mail').notNullable();
        table.string('password').notNullable();
    })
        .createTable('project', (table) => {
            table.increments('id');
            table.integer('user_id').notNullable();
            table.string('project_name').notNullable();
            table.string('project_type');
            table.string('project_title').notNullable();
            table.string('project_intro').notNullable();
            table.string('intro_image').notNullable();
            table.specificType('members', 'text[]');
            table.jsonb('medias');                      //kullanmıycağız şimdilik ama koyuyorum değişeiblir diye
            table.specificType('paragraphs', 'jsonb[]');
            table.specificType('links', 'text[]');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.foreign('user_id').references('user.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('post', (table) => {
            table.increments('id');
            table.integer('user_id').notNullable();
            table.string('post_name').notNullable();
            table.string('post_type');
            table.string('post_title').notNullable();
            table.string('post_intro').notNullable();
            table.string('intro_image').notNullable();
            table.jsonb('medias');                      //kullanmıycağız şimdilik ama koyuyorum değişeiblir diye
            table.specificType('paragraphs', 'jsonb[]');
            table.specificType('links', 'text[]');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.foreign('user_id').references('user.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('post')
        .dropTableIfExists('project')
        .dropTableIfExists('user');
};
