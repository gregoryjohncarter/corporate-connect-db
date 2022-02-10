#!/bin/bash
mysql -u root -pNuSSHKi22 << EOF
USE corporate;
source db/db.sql;
source db/schema.sql;
source db/seeds.sql;
EOF
echo "db clean and reset!"